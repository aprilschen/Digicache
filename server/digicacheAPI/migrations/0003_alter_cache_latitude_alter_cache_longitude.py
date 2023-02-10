# Generated by Django 4.1.6 on 2023-02-10 22:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('digicacheAPI', '0002_alter_cache_latitude_alter_cache_longitude'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cache',
            name='latitude',
            field=models.DecimalField(decimal_places=15, max_digits=18),
        ),
        migrations.AlterField(
            model_name='cache',
            name='longitude',
            field=models.DecimalField(decimal_places=15, max_digits=18),
        ),
    ]