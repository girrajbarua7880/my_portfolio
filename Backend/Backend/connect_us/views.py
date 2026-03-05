# from rest_framework.views import APIView
# from rest_framework.response import Response
# from django.core.mail import send_mail
# from .serializers import ContactSerializer
# from django.conf import settings


# class ContactMessageView(APIView):

#     def post(self, request):

#         serializer = ContactSerializer(data=request.data)

#         if serializer.is_valid():

#             # 1️⃣ Save to database
#             contact = serializer.save()

#             name = contact.name
#             email = contact.email
#             message = contact.message

#             # 2️⃣ Send email to admin
           
#             send_mail(
#                 "New Contact Message",
#                 f"Name: {name}\nEmail: {email}\nMessage: {message}",
#                     settings.EMAIL_HOST_USER,
#                     [settings.EMAIL_HOST_USER],
# )

#             # 3️⃣ Return greeting message
#             return Response({
#                 "success": True,
#                 "message": f"Thank you {name}! Your message has been received."
#             })

#         return Response(serializer.errors)


from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.mail import send_mail
from .serializers import ContactSerializer
from django.conf import settings


class ContactMessageView(APIView):

    def post(self, request):

        serializer = ContactSerializer(data=request.data)

        if serializer.is_valid():

            # 1️⃣ Save to database
            contact = serializer.save()

            name = contact.name
            email = contact.email
            message = contact.message

            # 2️⃣ Send email to admin
            send_mail(
                "New Contact Message",
                f"Name: {name}\nEmail: {email}\nMessage: {message}",
                settings.EMAIL_HOST_USER,
                [settings.EMAIL_HOST_USER],
            )

            # 3️⃣ Send greeting email to user
            send_mail(
                "Thank you for contacting me",
                f"Hi {name},\n\nThank you for reaching out. I have received your message and will get back to you soon.\n\nBest regards,\nGirraj Barua",
                settings.EMAIL_HOST_USER,
                [email],
            )

            # 4️⃣ Return success message to React
            return Response({
                "success": True,
                "message": f"Thank you {name}! Your message has been received."
            })

        return Response(serializer.errors)