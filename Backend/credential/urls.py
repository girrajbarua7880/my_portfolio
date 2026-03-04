from django.urls import path
from .views import CertificateListView
from .views import BadgeListView    

urlpatterns = [
    path('certificates/', CertificateListView.as_view(), name='certificates'),
    path('badges/', BadgeListView.as_view(), name='badges'),

]