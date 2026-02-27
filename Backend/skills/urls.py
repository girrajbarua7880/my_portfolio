from django.urls import path
from .views import Skill_View

urlpatterns = [
    path('skills/', Skill_View.as_view(), name='skills'),
]

