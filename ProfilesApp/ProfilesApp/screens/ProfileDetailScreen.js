import { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import { api } from '../api/client';

export default function ProfileDetailScreen({ route }) {
    const { id } = route.params;

    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await api.get(`/profiles/${id}`);
                setProfile(res.data);
            } catch (err) {
                console.log('ERROR:', err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [id]);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (!profile) {
        return (
            <View style={styles.center}>
                <Text>Profile not found</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.item}>Email: {profile.email}</Text>
            <Text style={styles.item}>Age: {profile.age}</Text>
            <Text style={styles.item}>Phone: {profile.phone}</Text>
            <Text style={styles.bio}>{profile.bio}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        fontSize: 16,
        marginBottom: 8,
    },
    bio: {
        fontSize: 16,
        marginTop: 12,
        color: '#555',
    },
});
