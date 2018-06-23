from rest_framework import serializers, generics
from tasks.models import Task


class RejectedTasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'priority', 'difficulty')


class RejectedTasksView(generics.ListAPIView):
    serializer_class = RejectedTasksSerializer
    queryset = Task.objects.filter(status=Task.REJECTED).order_by('date_added')
