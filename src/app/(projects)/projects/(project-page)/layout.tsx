import Container from "@/components/Container";

export default function ProjectPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      { children }
    </Container>
  );
}