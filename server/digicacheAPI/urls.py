from django.urls import path
from . import views

urlpatterns = [
    path('caches', views.Caches),
    path('caches/<int:pk>', views.SingleCache)
]