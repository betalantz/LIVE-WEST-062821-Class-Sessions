class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :votes, :image
end
