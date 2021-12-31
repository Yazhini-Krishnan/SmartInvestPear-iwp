from django.shortcuts import render, redirect
from .models import Stock
from .forms import StockForm
from django.contrib import messages
from django.conf.urls import include, url
#pk_500423e7a0af4ae7a089eede072b52a1 

def home(request):
    import requests
    import json

    if request.method == 'POST' :
        ticker = request.POST['ticker']
        api_requests=requests.get("https://cloud.iexapis.com/stable/stock/" + ticker + "/quote?token=pk_500423e7a0af4ae7a089eede072b52a1")
    
        try:
            api=json.loads(api_requests.content)

        except Exception as e:
            api = "error"
        return render(request, 'home.html', {'api' : api})
    else:
        return render(request, 'home.html', {'ticker' : "Enter ticker symbol"})
    
    # api_requests=requests.get("https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_500423e7a0af4ae7a089eede072b52a1")
    
    # try:
    #     api=json.loads(api_requests.content)

    # except Exception as e:
    #     api = "error"
    # return render(request, 'home.html', {'api' : api})

def about(request):
    return render(request, 'about.html', {})

def calculators(request):
    return render(request, 'calculators.html', {})  

def news(request):
    return render(request, 'news.html', {})     
    
def add_stock(request):
    import requests
    import json

    if request.method == 'POST' :
        form = StockForm(request.POST or None)

        if form.is_valid():
            form.save()
            messages.success(request, ("Your Stock has been added!"))
            return redirect('add_stock')


        
    else:

        ticker = Stock.objects.all()
        output = []
        for ticker_item in ticker:


            api_requests=requests.get("https://cloud.iexapis.com/stable/stock/" + str(ticker_item) + "/quote?token=pk_500423e7a0af4ae7a089eede072b52a1")
        
            try:
                api=json.loads(api_requests.content)
                output.append(api)

            except Exception as e:
                api = "error"

        return render(request, 'add_stock.html', {'ticker' : ticker, 'output' : output})

def delete(request, stock_id):
    item = Stock.objects.get(pk = stock_id)
    item.delete()
    messages.success(request, ("Your Stock has been deleted"))
    return redirect(add_stock)

def delete_stock(request):
    ticker = Stock.objects.all()
    return render(request, 'delete_stock.html', {'ticker' : ticker})
