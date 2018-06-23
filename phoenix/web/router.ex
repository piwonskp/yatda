defmodule Yatda.Router do
  use Yatda.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Yatda do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
   scope "/api/v1", Yatda do
    pipe_through :api

    post "/new-task", TaskController, :create
    get "/list-tasks", TaskController, :index
    get "/tasks/:id", TaskController, :show
   end
end
