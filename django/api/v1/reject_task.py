from rest_framework import serializers, generics, mixins
from rest_framework.response import Response

from tasks.models import Task


class RejectTaskView(generics.GenericAPIView):
    serializer_class = serializers.Serializer

    def post(self, request, pk):
        task = Task.objects.get(pk=pk)
        task.status = Task.REJECTED
        task.save()
        return Response()
