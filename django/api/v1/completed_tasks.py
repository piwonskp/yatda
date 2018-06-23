from rest_framework import serializers, generics
from tasks.models import Task


class CompletedTasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'priority', 'difficulty')


class CompletedTasksView(generics.ListAPIView):
    serializer_class = CompletedTasksSerializer
    queryset = Task.objects.filter(status=Task.COMPLETED).order_by('date_added')
