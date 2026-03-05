from django.contrib import admin
from .models import Skill
from .models import Tools
from .models import Resume

# Register your models here.
admin.site.register(Skill)  
admin.site.register(Tools)

@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):

    def has_add_permission(self, request):
        # If resume already exists → hide Add button
        return not Resume.objects.exists()