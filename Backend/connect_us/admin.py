from django.contrib import admin
from .models import Contact_us 

# Register your models here.

@admin.register(Contact_us)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "message", "created_at")
    list_filter = ("created_at",)
    search_fields = ("name", "email", "message")

    def has_add_permission(self, request):
        # If contact message already exists → hide Add button
        return not Contact_us.objects.exists()



