from rest_framework import serializers, generics, mixins
from rest_framework.response import Response

from tasks.models import Task


class CompleteTaskView(generics.GenericAPIView):
    serializer_class = serializers.Serializer

    def post(self, request, pk):
        task = Task.objects.get(pk=pk)
        task.status = Task.COMPLETED
        task.save()
        return Response()
