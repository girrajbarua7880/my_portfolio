from rest_framework.generics import ListAPIView
from .models import Certificate
from .serializers import CertificateSerializer
from .models import Badge
from .serializers import BadgeSerializer

class CertificateListView(ListAPIView):
    queryset = Certificate.objects.all().order_by('-add_time')
    serializer_class = CertificateSerializer

class BadgeListView(ListAPIView):
    queryset = Badge.objects.all().order_by('-add_time')
    serializer_class = BadgeSerializer
