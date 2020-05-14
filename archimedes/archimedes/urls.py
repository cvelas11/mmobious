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
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic import TemplateView
urlpatterns = [
    url('admin/', admin.site.urls),
    url("^iniciar/", views.iniciar, name = 'iniciar'),
    url("^set_question/", views.set_question, name = 'set_question'),
    url("^arquimedesquestion/", include('archimedesquestion.urls'), name = 'questions'),
    url("^$", views.practicar, name = 'practicar'),
    path('ingresar', TemplateView.as_view(template_name='archimedesquestion/practicar.html')), # <--
    path('accounts/', include('allauth.urls'))
]

urlpatterns += staticfiles_urlpatterns()
