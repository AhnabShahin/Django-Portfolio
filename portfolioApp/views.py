from django.shortcuts import render
from django.core.mail import send_mail
# Create your views here.
from django.http import HttpResponse


def index(request):
    if request.method == 'POST':
        name = request.POST.get('name', '')
        number = request.POST.get('number', '')
        subject = request.POST.get('subject', '')
        email = request.POST.get('email', '')
        messages = request.POST.get('message', '')
        message = messages + "\n\nName   : " + name + "\nPhone Number : " + number
        send_mail(subject, message, email, ['shahinahnab@gmail.com', email])

    return render(request, 'portfolioApp/index.html')
