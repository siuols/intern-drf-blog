from django.conf import settings

from django.contrib import admin

from django.conf.urls.static import static

from django.urls import path, include

from rest_framework import routers

from rest_framework.routers import DefaultRouter

from blogdrf.views import CategoryViewSet, TagViewSet, PostViewSet

router = routers.DefaultRouter()
router.register(r'category', CategoryViewSet, base_name='category')
router.register(r'tags', TagViewSet, base_name='tags')
router.register(r'post', PostViewSet, base_name='post')

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]

urlpatterns.extend(
    static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) +
    static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
)
