from django.urls import path
from .views import ContactMessageView

urlpatterns = [
    path('connect/', ContactMessageView.as_view(), name='contact'),
]