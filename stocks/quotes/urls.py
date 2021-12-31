from django.urls import path
from . import views

urlpatterns = [
    path('home.html', views.home, name="home"),
    path('about.html', views.about, name="about"),
    path('calculators.html', views.calculators, name="calculators" ),
    path('add_stock.html', views.add_stock, name="add_stock"),
    path('news.html', views.news, name="news"),
    path('delete/<stock_id>', views.delete, name="delete"),
    path('delete_stock.html', views.delete_stock, name="delete_stock"),
]