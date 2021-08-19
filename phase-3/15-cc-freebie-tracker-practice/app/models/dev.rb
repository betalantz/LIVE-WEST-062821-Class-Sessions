class Dev < ActiveRecord::Base

    has_many :freebies
    has_many :companies, through: :freebies

    def received_one?(item_name)
        self.freebies.any? {|freebie| freebie.item_name == item_name }
        # self.freebies.pluck(:item_name).include?(item_name)
        # !self.freebies.where(item_name: item_name).empty?
    end

end
