from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import HttpResponse
from archimedesquestion.forms import UserForm #, UserProfileInfoForm
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse

# Create your views here.

def questions(request):
    return render(request, 'archimedesquestion/questions.html')

def practicar(request):
    return render(request, 'archimedesquestion/practicar.html')
def proyecto(request):
    return render(request, 'archimedesquestion/proyecto.html')


def register(request):
    registered = False
    if request.method == 'POST':
        user_form = UserForm(data=request.POST)
        #profile_form = UserProfileInfoForm(data=request.POST)

        if user_form.is_valid(): #and profile_form.is_valid():
            user = user_form.save()
            user.set_password(user.password)
            user.save()
            #profile = profile_form.save(commit=False)
            #profile.user = user
            #if 'profile_pic' in request.FILES:
            #profile.profile_pic = request.FILES['profile_pic']
            #profile.save()
            registered = True
        else:
            print(user_form.errors)#profile_form.errors)
    else:
        user_form= UserForm()
        #profile_form = UserProfileInfoForm()

    return render(request, 'archimedesquestion/register.html',
     {'user_form':user_form, 'registered':registered}) #, 'profile_form':profile_form})

def ingresar(request):

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username,password=password)

        if user:
            if user.is_active:
                login(request,user)
                return HttpResponseRedirect(reverse('questions'))
            else:
                return HttpResponse('Account not active')
        else:
            print("Someone tried  to login and failed")
            print("Username:{} and password:{}".format(username,password))
            return HttpResponse("Invalid login details")

    else:
        return render(request, 'archimedesquestion/ingresar.html')
