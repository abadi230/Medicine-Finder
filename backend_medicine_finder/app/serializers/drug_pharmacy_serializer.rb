class DrugPharmacySerializer < ActiveModel::Serializer
  attributes :id, :price, :quantity
  has_one :drug
  has_one :pharmacy
end
