# Generated by Django 2.0.5 on 2018-05-07 03:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogdrf', '0003_auto_20180507_0302'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='banner_photos',
            new_name='banner_photo',
        ),
    ]
