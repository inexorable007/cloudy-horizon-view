
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md mx-auto">
      <Input
        name="search"
        placeholder="Search location..."
        className="bg-white/20 border-white/20 placeholder:text-gray-400"
      />
      <Button type="submit" variant="ghost" className="bg-white/20 hover:bg-white/30">
        <Search className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default SearchBar;
