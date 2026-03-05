from rest_framework import serializers
from .models import Skill
from .models import Tools
from .models import Resume

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'      
        

class ToolsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tools
        fields = '__all__'

class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = '__all__'