module EmailClean
  refine String do
    def remove_leading_comma
      self.sub!(/^,/, '')
      self
    end

    def trailing_comma
      self.sub!(/,$/, '')
      self
    end

    def white_space
      self.gsub!(/\s/, '')
      self
    end
  end
end

using EmailClean
