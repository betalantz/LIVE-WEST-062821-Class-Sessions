class CampersController < ApplicationController

    def index
        render json: Camper.all
    end

    def show

    end

    def create

    end

    private

    def camper_params

    end
end
