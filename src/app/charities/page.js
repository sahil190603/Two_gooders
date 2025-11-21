'use client';

import React, { useState, useMemo } from 'react';
import { Table, Input, Button, Space, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import charitiesData from '../Data/two_gooders_charity';

const { Search } = Input;

const CharitiesPage = () => {
    const router = useRouter();
    const [searchText, setSearchText] = useState('');
    const [selectedLetter, setSelectedLetter] = useState('');

    // Filter charities based on search and selected letter
    const filteredCharities = useMemo(() => {
        let filtered = charitiesData;

        // Filter by search text
        if (searchText) {
            filtered = filtered.filter(charity =>
                charity.name.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        // Filter by selected letter
        if (selectedLetter) {
            filtered = filtered.filter(charity =>
                charity.name.toUpperCase().startsWith(selectedLetter)
            );
        }

        return filtered;
    }, [searchText, selectedLetter]);

    // Generate A-Z buttons
    const alphabetButtons = useMemo(() => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        return letters.map(letter => (
            <Button
                key={letter}
                type={selectedLetter === letter ? 'primary' : 'default'}
                onClick={() => setSelectedLetter(selectedLetter === letter ? '' : letter)}
                style={{ margin: '2px', minWidth: '40px', borderRadius: 0 }}
            >
                {letter}
            </Button>
        ));
    }, [selectedLetter]);

    // Table columns
    const columns = [
        {
            title: 'Charity Name',
            dataIndex: 'name',
            key: 'name',
            render: (name, record) => (
                <Button
                    type="link"
                    onClick={() => router.push(`/charities/${encodeURIComponent(name)}`)}
                    style={{ padding: 0, height: 'auto', textAlign: 'left' }}
                >
                    {name}
                </Button>
            ),
        },
    ];

    return (
        <div style={{ padding: '24px', marginTop: '80px'}}>
            <Card title="Charities Directory" style={{ borderRadius: 0 }}>
                <div style={{ marginBottom: '16px' }}>
                    <Space.Compact style={{ width: '100%', marginBottom: '16px' }}>
                        <Input
                        style={{ borderRadius: 0}}
                            placeholder="Search charities by name..."
                            allowClear
                            size="large"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            onPressEnter={() => { }}
                        />
                        <Button
                         style={{ borderRadius: 0}}
                            size="large"
                            icon={<SearchOutlined />}
                            onClick={() => {/* optional: trigger search action, but your onChange already filters */ }}
                        />
                    </Space.Compact>
                </div>

                {/* A-Z Filter Section */}
                <div style={{ marginBottom: '16px' }}>
                    <Space wrap>
                        <Button
                            type={!selectedLetter ? 'primary' : 'default'}
                            onClick={() => setSelectedLetter('')}
                            style={{ margin: '2px', borderRadius: 0}}
                        >
                            All
                        </Button>
                        {alphabetButtons}
                    </Space>
                </div>

                {/* Results count */}
                <div style={{ marginBottom: '16px', color: '#666' }}>
                    Showing {filteredCharities.length} of {charitiesData.length} charities
                    {selectedLetter && ` starting with "${selectedLetter}"`}
                    {searchText && ` matching "${searchText}"`}
                </div>

                {/* Table */}
                <Table
                    columns={columns}
                    dataSource={filteredCharities}
                    rowKey="id"
                    pagination={{
                        pageSize: 10,
                        showSizeChanger: true,
                        showQuickJumper: true,
                        showTotal: (total, range) =>
                            `${range[0]}-${range[1]} of ${total} items`,
                    }}
                    locale={{
                        emptyText: searchText || selectedLetter
                            ? 'No charities found matching your criteria'
                            : 'No charities available'
                    }}
                />
            </Card>
        </div>
    );
};

export default CharitiesPage;