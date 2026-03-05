from rest_framework import serializers
from .models import Contact_us

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact_us
        fields = "__all__"