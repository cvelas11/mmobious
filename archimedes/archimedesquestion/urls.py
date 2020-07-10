"""archimedes URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from django.conf.urls import include
from archimedesquestion import views
from django.views.generic import TemplateView

app_name= 'archimedesquestion'

urlpatterns = [
    url("^register", views.register, name = 'register'),
    url("^ingresar", views.ingresar, name = 'ingresar'),
    url("^logout", views.logout_func, name = 'logout'),
    url("^practicar", views.practicar, name = 'practicar'),
    url("^recursos", views.recursos, name = 'recursos'),
    url("^questions", views.questions, name = 'questions'),
    url("^iniciar", views.iniciar, name = 'iniciar'),
    url("^proyecto", views.proyecto, name = 'proyecto'),
    url("^dashboard", views.dashboard, name = 'dashboard'),

    # path('practicar', TemplateView.as_view(template_name='archimedesquestion/practicar.html')), # <--
    #path('accounts/', include('allauth.urls'))

]
