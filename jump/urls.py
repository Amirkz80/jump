from django import views
from django.urls import path
from . import views

appname = 'jump'

urlpatterns = [
  path('', views.index, name='index'),
]
