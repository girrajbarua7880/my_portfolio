
from rest_framework import generics
from .models import Skill
from .serializers import SkillSerializer

class Skill_View(generics.ListCreateAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
