"""yatda URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from api.v1.new_task import NewTaskView
from api.v1.list_tasks import ListTasksView
from api.v1.completed_tasks import CompletedTasksView
from api.v1.rejected_tasks import RejectedTasksView
from api.v1.retrieve_task import RetrieveTaskView
from api.v1.complete_task import CompleteTaskView
from api.v1.reject_task import RejectTaskView


api_v1 = [
    path('list-tasks', ListTasksView.as_view()),
    path('completed-tasks', CompletedTasksView.as_view()),
    path('rejected-tasks', RejectedTasksView.as_view()),
    path('new-task', NewTaskView.as_view()),
    path('tasks/<int:pk>', RetrieveTaskView.as_view()),
    path('tasks/<int:pk>/complete', CompleteTaskView.as_view()),
    path('tasks/<int:pk>/reject', RejectTaskView.as_view()),
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(api_v1))
]
