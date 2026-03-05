from django.db import models


class Skill(models.Model):

    CATEGORY_CHOICES = (
        ("frontend", "Frontend"),
        ("backend", "Backend"),
    )

    skill_name = models.CharField(max_length=100)
    logo = models.ImageField(null=False,)
    description = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default="frontend")
    setup_date = models.DateTimeField(auto_now_add=True)
    


    def __str__(self):
        return self.skill_name
    

class Tools(models.Model):

    tool_name = models.CharField(max_length=100)
    logo = models.ImageField(null=False,)
    description = models.TextField()
    setup_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.tool_name
    

    

class Resume(models.Model):
    file = models.FileField(upload_to="resume/")
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "Resume"