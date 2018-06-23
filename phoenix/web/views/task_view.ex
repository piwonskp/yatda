defmodule Yatda.TaskView do
  use Yatda.Web, :view

  def render("index.json", %{tasks: tasks}) do
    render_many(tasks, Yatda.TaskView, "task.json")
  end

  def render("show.json", %{task: task}) do
    render_one(task, Yatda.TaskView, "task.json")
  end

  def render("task.json", %{task: task}) do
    %{id: task.id,
      title: task.title,
      description: task.description,
      priority: task.priority,
      difficulty: task.difficulty,
      date_added: task.date_added,
      date_resolved: task.date_resolved}
  end
end
