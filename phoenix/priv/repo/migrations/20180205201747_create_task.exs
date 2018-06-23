defmodule Yatda.Repo.Migrations.CreateTask do
  use Ecto.Migration

  def change do
    create table(:tasks) do
      add :title, :string
      add :description, :text
      add :priority, :integer
      add :difficulty, :integer
      add :date_added, :naive_datetime
      add :date_resolved, :naive_datetime

      timestamps()
    end
  end
end
