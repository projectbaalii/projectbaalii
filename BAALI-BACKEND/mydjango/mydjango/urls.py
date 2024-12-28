from django.contrib import admin
from django.urls import path
from django.contrib.auth.models import User
from django_otp.admin import OTPAdminSite
from django_otp.plugins.otp_totp.models import TOTPDevice
from django_otp.plugins.otp_totp.admin import TOTPDeviceAdmin

# Define a custom admin site that requires OTP
class OTPAdmin(OTPAdminSite):
    pass

# Instantiate the custom admin site
admin_site = OTPAdmin(name='OTPAdmin')
admin_site.register(User)
admin_site.register(TOTPDevice, TOTPDeviceAdmin)

# Define URL patterns
urlpatterns = [
    path('admin/', admin_site.urls),
]
