class Api::V1::PharmaciesController < ApplicationController
    before_action :set_pharmacy, only: [:show,:update,:destroy]

  def index
    pharmacies = Pharmacy.all
    render json: pharmacies, status: 200
  end

  def create
    pharmacy = Pharmacy.create(pharmacy_params)
    render json: pharmacy, status: 201
  end

  def update
    @pharmacy.update(pharmacy_params)
    render json: @pharmacy, status: 200
  end

  def destroy
    pharmacyId = @pharmacy.id
    @pharmacy.destroy
    render json: {message:"Zap! pharmacy deleted", pharmacyId:pharmacyId}
  end

  def show
    render json: @pharmacy, status: 200
  end

  private
  def pharmacy_params
    params.permit(:name, :location)
  end

  def set_pharmacy
    @pharmacy = Pharmacy.find(params[:id])
  end
end
