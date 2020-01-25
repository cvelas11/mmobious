from django import forms
from . import models
from django.contrib.auth.models import User
#from archimedesquestion.models import UserProfileInfo



class UserForm(forms.ModelForm):
    username=forms.CharField(widget=forms.TextInput(attrs={'class':'form-control'}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class':'form-control'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control'}))
    confirm_password=forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control'}))

    class Meta():
        model = User
        fields = ('username','email','password')

    def clean(self):
        cleaned_data = super(UserForm, self).clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("confirm_password")

        if password != confirm_password:
            raise forms.ValidationError("password and confirm_password does not match")
