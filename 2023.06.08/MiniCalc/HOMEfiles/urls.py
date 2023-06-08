from django.urls import path

# To add function form views.py
from . import views

urlpatterns = [
    path("", views.index, name="index"),
]