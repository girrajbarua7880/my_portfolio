
from rest_framework import generics
from .models import Skill
from .models import Tools
from .serializers import SkillSerializer
from .serializers import ToolsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Resume


class Skill_View(generics.ListCreateAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class Tools_View(generics.ListCreateAPIView):
    queryset = Tools.objects.all()
    serializer_class = ToolsSerializer


class ResumeView(APIView):
    def get(self, request):
        resume = Resume.objects.first()
        if resume:
            return Response({
                "file": request.build_absolute_uri(resume.file.url)
            })
        return Response({"file": None})
