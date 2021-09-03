class ApplicationController < ActionController::API

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response  

    wrap_parameters format: []

    def render_not_found_response(exception)
        render json: { error: "#{exception.model} not found" }, status: :not_found
    end

end
