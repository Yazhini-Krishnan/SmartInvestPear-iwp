from django.shortcuts import render
#pk_500423e7a0af4ae7a089eede072b52a1 

def home(request):
    import requests
    import json
    api_requests=requests.get("https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_500423e7a0af4ae7a089eede072b52a1")
    return render(request, 'home.html', {})

def about(request):
    return render(request, 'about.html', {})

def calculators(request):
    return render(request, 'calculators.html', {})    
