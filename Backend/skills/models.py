from django.db import models

# Create your models here.
class Skill(models.Model):    #class always in capital latters
    
    skill_name = models.CharField(max_length=100)
    icon = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.skill_name

