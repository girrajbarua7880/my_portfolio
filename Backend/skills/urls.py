from django.urls import path
from .views import Skill_View
from .views import Tools_View
from .views import ResumeView

urlpatterns = [
    path('skills/', Skill_View.as_view(), name='skills-api'),
    path('tools/', Tools_View.as_view(), name='tools-api'),
    path('resumes/', ResumeView.as_view(), name='resume-api'),
]

