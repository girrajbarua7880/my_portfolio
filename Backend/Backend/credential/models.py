from django.db import models

# Create your models here.
class Certificate(models.Model):
    Certificate_name = models.CharField(max_length=255, blank=False, null=False)
    Certificate_image = models.ImageField(upload_to='certificates/',blank=False, null=False)
    Certificate_description = models.TextField(max_length=500, blank=False, null=False)
    Certificate_link = models.URLField(max_length=200)

    issued_by = models.CharField(max_length=255)
    issue_date = models.DateField()
    add_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.Certificate_name



class Badge(models.Model):
    Badge_name = models.CharField(max_length=255, blank=False, null=False)
    Badge_image = models.ImageField(upload_to='badges/',blank=False, null=False)
    Badge_link = models.URLField(max_length=200)
    issued_by = models.CharField(max_length=255)
    issue_date = models.DateField()
    add_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.Badge_name