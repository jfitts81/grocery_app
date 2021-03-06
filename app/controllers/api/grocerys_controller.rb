class Api::GrocerysController < ApplicationController
        def index 
          render json: Grocery.all
        end
       
        def show
          render json: Grocery.find(params[:id])
        end
        def create
          @grocery = Grocery.new(grocery_params)
          if @grocery.save
            render json: @grocery
          else
            render json: { errors: @grocery.errors }, status: :unprocessable_entity
          end
        end
        def update
          @grocery = Grocery.find(params[:id])
          if @grocery.update(grocery_params)
            render json: @grocery
          else
            render json: { errors: @grocery.errors }, status: :unprocessable_entity
          end
        end
        def destroy
          Grocery.find(params[:id]).destroy
          render json: { message: 'Grocery Item was deleted'}
        end
        private 
          def grocery_params
            params.require(:grocery).permit(:title, :price, :desc, :complete)
          end
      end
