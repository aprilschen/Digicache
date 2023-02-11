from django.db import models

# Create your models here.
class Cache(models.Model):
    username = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=2000)
    latitude = models.DecimalField(max_digits=18, decimal_places=15)
    longitude = models.DecimalField(max_digits=18, decimal_places=15)
    date = models.DateField(blank=True)
    time = models.TimeField(blank=True)
    tags = models.CharField(max_length=2000, blank=True)
    image = models.ImageField()

    def __str__(self):
        return str(self.title)