from django.contrib import admin
from restaurants import views
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'restaurants', views.RestaurantView, 'restaurant')

urlpatterns = [
	path('api/', include(router.urls)),
	path('admin/', admin.site.urls),
    # path('api/restaurant/', views.RestaurantListCreate.as_view() ),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)