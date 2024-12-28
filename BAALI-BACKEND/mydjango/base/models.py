from django_otp.plugins.otp_totp.models import TOTPDevice

class MyTOTPDevice(TOTPDevice):
    @property
    def is_interactive(self):
        return True
