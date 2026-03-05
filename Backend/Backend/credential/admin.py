from django.contrib import admin
from .models import Certificate
from .models import Badge

# Register your models here

admin.site.register(Certificate)
admin.site.register(Badge)