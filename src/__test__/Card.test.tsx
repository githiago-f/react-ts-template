import React from 'react';
import { render } from '@testing-library/react';
import Card from 'components/Card';

describe('# Card component test', () => {
  const title = 'Titulo de um card';
    
  beforeEach(() => {
    render(<Card title={title} />);
  });
    
  it('should Render Card component without crashing', async () => {
    const cardTitle = render(<h3>Titulo de um card</h3>);
    expect(cardTitle).toBeInTheDocument();
  });

  it('Contains a title', () => {
        
  });
});


